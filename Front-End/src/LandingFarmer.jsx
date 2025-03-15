import React from 'react'
import './LandingFarmer.css'
import NavbarLF from './NavbarLF'
import Footer from './Footer'
import About from './About'
import { Link, useNavigate } from 'react-router-dom'

function LandingFarmer() {

    const navigate = useNavigate();

    return (
        <>
            <NavbarLF shownavbar={true} />

            <div className='bodyLF'>
                <div className="containerLF">

                    <div className="image-containerLF">
                        <img src="https://c1.wallpaperflare.com/preview/778/189/239/farmer-tractor-agriculture-farm.jpg" alt="Farm Equipment" style={{ height: "555px",borderRadius:"10px" }} />
                    </div>


                    <div className="contentLF">
                        <h1 style={{ fontsize: "36px", color: "#166534" }}>Empowering Farmers, Connecting Communities</h1>
                        <p style={{ fontsize: "18px", color: "#065f46", margintop: "10px" }}>Rent or lend high-quality farm equipment effortlessly.</p>
                        <div className="buttonsLF">
                            <button className="primary-btnLF" onClick={() => navigate('/exploreLF')} style={{marginLeft:"50px"}}>Explore Equipment</button>
                            <button className="secondary-btnLF" onClick={() => navigate('/placedOrderFarmer')}>List Your Equipment</button>
                        </div>
                    </div>
                </div>
            </div>
            <br />

            <h1 id="Article-section" style={{ fontsize: "36px", color: "#166534", marginLeft: "45%" }} >Articles</h1>

            <About
                url={"https://files.oaiusercontent.com/file-EKYsdMTqLww6meykotb3Ha?se=2025-03-11T16%3A59%3A28Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D37f07a34-7578-4775-ba78-357e88656e60.webp&sig=l0te1wOZO1y/xs2jKf7bM2mi1X1CD0K1RK2ZRnwF8Zs%3D"}
                title={"Efficient Farm Equipment Rentals"}
                para={"Renting farm equipment is a game-changer for farmers who need modern tools without the high cost of ownership. Our platform connects farmers with reliable rental providers, ensuring access to tractors, harvesters, and irrigation systems. Say goodbye to financial burdens and hello to efficiency with affordable equipment rentals!"}
                click={() => { window.open("https://farmersrathna.com/farm-equipment-rental-apps/") }}
            />

            <About
                url={"https://files.oaiusercontent.com/file-HpNdin2ZkwQMeFdeBHPD6N?se=2025-03-11T17%3A00%3A36Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D75b60aa2-b10b-4bc7-8d93-3d404d1e18ea.webp&sig=0Fz74hPD6%2B/TFbzyXrF5%2B4%2BOR9gnkWV2QfgtK1XxbsA%3D"}
                title={"Sustainable Farming with Shared Resources"}
                para={"Community-driven agriculture thrives on shared resources. By renting and sharing farm tools, farmers can reduce waste, minimize expenses, and boost productivity. Our rental marketplace fosters collaboration, helping you access high-quality equipment at a fraction of the cost while promoting sustainable farming practices."}
                click={() => { window.open("https://supplychain.edf.org/resources/sustainable-agriculture-101-strategies-resources/") }}
            />

            <About
                url={"https://files.oaiusercontent.com/file-B86p18Kkx3eS4aN73NMqCn?se=2025-03-11T17%3A01%3A41Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Debce7954-4574-41d9-9452-121eaf480f3d.webp&sig=JNq62HGgLFgxxVeQO8RErp9w0D8uQARrdCcfI6JmyaQ%3D"}
                title={"Boosting Productivity with Smart Technology"}
                para={"Embrace the future of farming with smart agricultural technology. From GPS-enabled tractors to AI-powered irrigation systems, our rental service offers cutting-edge solutions that enhance efficiency. Renting high-tech equipment ensures you stay ahead in the industry without heavy investments, making precision farming accessible to all."}
                click={() => { window.open("https://www.forbes.com/councils/forbestechcouncil/2024/03/15/11-proven-strategies-to-boost-tech-team-productivity/") }}
            />

            <About
                url={"https://files.oaiusercontent.com/file-SNn6EiBmTtUQqS313ET8CR?se=2025-03-11T17%3A02%3A34Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D06df61aa-b4d9-4a4d-b103-d8f1a594bf00.webp&sig=Gsm3aZc055rSArkslIRei7wC2Yyab/Sy02o9irh%2BWz8%3D"}
                title={"Cost-Effective Solutions for Small Farmers"}
                para={"Small-scale farmers often face financial challenges when purchasing expensive machinery. Our rental platform provides an affordable solution by offering short-term and seasonal equipment rentals. Whether you need a plow for a day or a harvester for a season, we’ve got you covered—empowering farmers with cost-effective solutions!"}
                click={() => { window.open("https://www.idinsight.org/project/supporting-digital-green-bringing-tech-enabled-solutions-to-agricultural-extension/") }}
            />

            <Footer />
            <div id="contact-section"></div>
        </>
    )
}

export default LandingFarmer