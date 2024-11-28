import {Button} from "../components/Button";
import {FacebookIcon} from "../icons/FacebookIcon";
import { GithubIcon } from "../icons/GithubIcon";
import { InstagramIcon } from "../icons/InstagramIcon";

export const Footer = ()=>{
    return <>
        <footer className="px-10 md:px-16 lg:px-28 py-10 my-10 bg-brand-950 text-brand-50">
            <div className="flex flex-col gap-5 md:flex-row justify-between flex-wrap mb-4">
                <div className="w-full md:max-w-60">
                    <div className="text-2xl font-bold mb-2">Equalify</div>
                    <p>Share and settle expenses with friends and family, making group finances simple and stress-free.</p>
                </div>
                <div className="list-none">
                    <div className="text-2xl font-bold mb-2">Product</div>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>How It Works</li>
                </div>
                <div className="list-none">
                    <div className="text-2xl font-bold mb-2">Company</div>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Press</li>
                    <li>Contact</li>
                </div>
                <div className="list-none">
                    <div className="text-2xl font-bold mb-2">Resources</div>
                    <li>Help Center</li>
                    <li>Blog</li>
                    <li>Developers</li>
                    <li>Community</li>
                </div>
            </div>
            <div className="border-t-2 border-brand-600 ">
                <div className="flex flex-col md:flex-row justify-between my-4">
                    <div className="flex gap-4 my-2"> 
                        <FacebookIcon/>
                        <InstagramIcon />
                        <GithubIcon />
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 my-2">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">Cookie Settings</a>
                        <a href="#">© 2024 Equalify. All rights reserved.</a>
                    </div>
                </div>
            </div>
        </footer>
    </>
}