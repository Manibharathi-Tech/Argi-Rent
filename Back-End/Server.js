//!JWT
const Secret_Key = "mani@12345678";
const jwt = require("jsonwebtoken");

//! MONGO DB CONNECTION
const { MongoClient } = require("mongodb")
const url = 'mongodb://localhost:27017'
const dbName = "AGRIRENT"
const { ObjectId } = require("mongodb");
let db;


//! API PROVIDER
const express = require("express")
const PORT = 2000
const cors = require("cors")
const app = express();

//! MiddleWare
app.use(cors());  // cross origin
app.use(express.json({ limit: "50mb" })) //Converts JSON into JavaScript objects.
app.use(express.urlencoded({ extended: true, limit: "50mb" })); 



//! connect to MongoDB
async function connectdb() {
    try {
        const client = new MongoClient(url);

        await client.connect();

        console.log("mongodb connected");

        // db = client.db(dbName);

        return client ;

    } catch (err) {
        console.error("mongodb not Connection ", err);
    }
}

// connectdb();



//ALL the API

//!login API
app.post("/login", async (req, res) => {

    const client = await connectdb();
    const db = client.db(dbName);

    try {

        if (!db) {
            return res.status(404).json({ error: "Database not connected" });
        }

        const { Email, Password } = req.body;

        if (!Email || !Password) {
            return res.status(404).json({ error: "All fields are required" });
        }

        const collection = db.collection("users");

        const databaseuser = await collection.findOne({ Email });  // find the data from the database

        if (!databaseuser) {
            return res.status(404).json({ error: "User not found. Please Sign Up" });
        }

        if (databaseuser.Password !== Password) {
            return res.status(404).json({ error: "Incorrect password" });
        }

        // Generate JWT Token
        const token = jwt.sign({ id: databaseuser._id, role: databaseuser.Role, email: databaseuser.Email }, Secret_Key, { expiresIn: "24h" });

        res.status(200).json({
            message: "Login successful", token, role: databaseuser.Role,
        });

    } catch (error) {
        console.error("Login Error");
        res.status(404).json({ error: "server problem" });
    }finally {
        await client.close();   // close the connection of db
    }

});

//!===========================================================================

//!SignUp API
app.post("/Signup", async (req, res) => {

    const client = await connectdb();
    const db = client.db(dbName);

    try {

        if (!db) {
            return res.status(404).json({ error: "Database not connected" });
        }

        const { Username, Password, Email, Role } = req.body;


        if (!Username || !Email || !Password) {
            return res.status(404).json({ error: "All fields are required" });
        }

        const collection = db.collection("users");   //collection name
        const databaseuser = await collection.findOne({ Email });  // find the data from the database

        if (databaseuser) {
            return res.status(404).json({ error: "UserName Is Already Exist" });
        }

        collection.insertOne(req.body);  // storing the data in MongoDB


        res.status(200).json({ message: "SignUp successful", user: databaseuser });

    } catch (error) {
        console.error("Signup Error");
        res.status(404).json({ error: "server problem" });
    }finally {
        await client.close();  // Closing the connection
    }

});

//!==========================================================================

//!  EquipOwner API - Add Equipment Listing with Duplicate Check

app.post("/ownerequip", async (req, res) => {

    const client = await connectdb();
    const db = client.db(dbName);

    try {

        if (!db) return res.status(500).json({ error: "Database notconnected" });

        const { EquipName, EquipPricePerDay, EquipDescription, EquipOwnerName, EquipLocation, EquipPhNo, EquipEmail, EquipImage } = req.body;

        if (!EquipName || !EquipPricePerDay || !EquipDescription || !EquipOwnerName || !EquipLocation || !EquipPhNo || !EquipEmail || !EquipImage) {
            return res.status(400).json({ error: "All fields are required" });
        }

        if (!/^\d{10}$/.test(EquipPhNo)) {
            return res.status(400).json({ error: "Invalid phone number" });
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(EquipEmail)) {
            return res.status(400).json({ error: "Invalid email format" });
        }

        const collection = db.collection("equipment"); 
        const existingEquipment = await collection.findOne({ EquipName, EquipEmail });

        if (existingEquipment) {
            return res.status(400).json({ error: "Equipment already listed by this owner." });
        }

        const newEquipment = {
            EquipName, EquipPricePerDay, EquipDescription,
            EquipOwnerName, EquipLocation, EquipPhNo, EquipEmail, EquipImage,
        };

        await collection.insertOne(newEquipment);

        res.status(200).json({ message: "Equipment listed successfully", data: newEquipment });

    } catch (error) {

        console.error(" Adding Equipment Error");

        res.status(500).json({ error: "Server error." });
    }finally {
        await client.close();  //connection close
    }
});


//!===============================================================================

//!  GET Wishlist API (with Pagination)

app.get("/wishlist/:ownerEmail", async (req, res) => {

    const client = await connectdb();
    const db = client.db(dbName);

    try {

        if (!db) return res.status(500).json({ error: "Database not connected" });

        const { ownerEmail } = req.params;
        let { page, limit } = req.query;

        if (!ownerEmail) {
            return res.status(400).json({ error: "Owner email is required" });
        }

        page = parseInt(page) || 1;
        limit = parseInt(limit) || 6;

        const skip = (page - 1) * limit;

        const collection = db.collection("equipment"); // Wishlist collection
        const totalItems = await collection.countDocuments({ ownerEmail });

        const wishlistItems = await collection.find({ EquipEmail: ownerEmail }).skip(skip).limit(limit).toArray();

        const totalPages = Math.ceil(totalItems / limit);

        res.status(200).json({
            data: wishlistItems,
            totalItems, // total data
            totalPages, //total page
            currentPage: page,
        });

    } catch (error) {
        console.error("Error Fetching equipment:", error);

        res.status(500).json({ error: "Server error" });
    }finally {
        await client.close();  
    }
});

//!=====================================================================

//! getting equipment from equipment DB

app.get("/cardExplore", async (req, res) => {

    const client = await connectdb();
    const db = client.db(dbName);

    try {

        if (!db){
             return res.status(500).json({ error: "Database not connected" });
            }

        const collection = db.collection("equipment");
        const equipments = await collection.find().toArray();

        res.status(200).json(equipments);

    } catch (error) {

        console.error("Error Fetching Equipment:", error.message);

        res.status(500).json({ error: "Server error" });
    }finally {
        await client.close(); 
    }
});

//!==================================================================

//! Add to Placed Orders (Check for Duplicates)

app.post("/placedOrder", async (req, res) => {

    const client = await connectdb();
    const db = client.db(dbName);

    try {

      if (!db){
         return res.status(500).json({ error: "Database not connected" });
      }
  
      const { EquipName, EquipPricePerDay, EquipLocation, EquipOwnerName, AmountPay , _id } = req.body;
  
      if (!EquipName || !EquipPricePerDay || !EquipLocation || !EquipOwnerName || !AmountPay) {
        return res.status(400).json({ error: "All fields are required" });
      }
  
      const collection = db.collection("orderEquipment");
  
      // Check the duplicate 
      const existingOrder = await collection.findOne({ EquipName, EquipOwnerName , _id});
  
      if (existingOrder) {
        return res.status(400).json({ message: "Machine already in Placed Orders" });
      }
  
      // Inserting the new order into orderEquipment
      await collection.insertOne(req.body);
  
      res.status(201).json({ message: "Machine added to Placed Orders" });
  
    } catch (error) {
      console.error("Error Adding to Placed Orders:", error.message);
      res.status(500).json({ error: "Server error" });
    }finally {
        await client.close();  
    }
  });
  
//!=========================================================================

//! get all the ordered data 

  app.get("/getdataproduct", async (req, res) => {

    const client = await connectdb();
    const db = client.db(dbName);

    try {
        if (!db) {
            return res.status(500).json({ error: "Database not connected" });
        }

        const collection = db.collection("orderEquipment"); 

        const products = await collection.find().toArray(); 
        

        res.status(200).json(products);

    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ error: "Server error" });
    }finally {
        await client.close(); 
    }
});

//!=========================================================================

app.delete("/removedata/:id", async (req, res) => {

    const client = await connectdb();
    const db = client.db(dbName);

    try {
        if (!db) {
            return res.status(500).json({ error: "Database not connected" });
        }

        const { id } = req.params;
        
        const collection = db.collection("equipment"); // collection name

        await collection.deleteOne({ _id : new ObjectId(id) } ); 

        res.status(200).json({ message: "Item removed from Uploaded Product" });

    } catch (error) {
        res.status(500).json({ error: "Failed to remove item" });
    }finally {
        await client.close();  
    }
    
});

//!=========================================================================

app.delete("/whishlistProduct/:id", async (req, res) => {

    const client = await connectdb();
    const db = client.db(dbName);

    try {
        if (!db) {
            return res.status(500).json({ error: "Database not connected" });
        }

        const { id } = req.params;
        
        const collection = db.collection("orderEquipment"); // collection name

        await collection.deleteOne({ _id : id } ); 

        res.status(200).json({ message: "Item removed from wishlist" });

    } catch (error) {
        res.status(500).json({ error: "Failed to remove item" });
    }finally {
        await client.close();  
    }
    
});

//!JWT MiddleWare

const verifyToken = (req, res, next) => {
    const token = req.header("Authorization"); // Read token from request headers

    if (!token) {
        return res.status(401).json({ error: " No token provided." });
    }

    try {
        const verified = jwt.verify(token.replace("Bearer ", ""), Secret_Key); // Verify the token

        req.user = verified; // Attach user data to request

        next(); // Proceed to the next middleware or route

    } catch (error) {
        res.status(403).json({ error: "Invalid token" });
    }
};



//!-----------------------------



//Listening port address

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
});