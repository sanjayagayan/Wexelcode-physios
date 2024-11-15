import Image from "next/image";

import Link from "next/link";
import { useState } from "react";

const Sidebar = ({ openClass }) => {

    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };
    return (
        <>
            <div className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar ${openClass}`}>
                <div className="mobile-header-wrapper-inner">
                    <div className="mobile-header-content-area">
                        <div className="mobile-logo"><Link className="d-flex" href="/"><img alt="wexelcode" src="/images/logo.svg" /></Link></div>
                        <div className="perfect-scroll">

                            <div className="mobile-menu-wrap mobile-header-border">
                                        <div className="tab-pane">
                                            <nav className="mt-15">
                                                <ul className="mobile-menu font-heading">
                                                    <li>
                                                        <Link className="active" href="/">Home</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="active" href="/">About</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="active" href="/">Company</Link>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                            </div>
                            <div className="site-copyright color-grey-400 mt-0">
                                <div className="box-download-app">
                                    <p className="font-xs color-grey-400 mb-25">Download our Apps and get extra 15% Discount on your first Order…!</p>
                                    
                                    <div className="mb-25">
                                        <Link href="#">
                                            <Image
                                                width={147}
                                                height={49}
                                                className="mr-10 object-fit-cover"
                                                src="/images/apple.png"
                                                alt="wexelcode"
                                            />
                                        </Link>

                                        <Link href="#">
                                            <Image
                                                width={165}
                                                height={48}
                                                className="object-fit-cover"
                                                src="/images/playstore.png"
                                                alt="wexelcode"
                                            />
                                        </Link>
                                    </div>

                                    <p className="font-sm color-grey-400 mt-20 mb-10">Secured Payment Gateways</p><img src="/images/payment-method.png" alt="wexelcode" />
                                </div>
                                <div className="mb-0">Copyright 2022 © wexelcode - Marketplace Template.<br />Designed by<Link href="/http:/alithemes.com" target="_blank">&nbsp; AliThemes</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};

export default Sidebar;