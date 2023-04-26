import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";

function Link({ page, selectedPage, setSlectedPage }) {
    const lowerCaseP = page.toLowerCase();

    return (
        <AnchorLink
            className={selectedPage === lowerCaseP && ' text-yellow'}
            href={`#${lowerCaseP}`}
            onClick={()=> setSlectedPage(lowerCaseP)}
        >{page}</AnchorLink>
    );
}

function Navbar(props) {

    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveSmallScreen = useMediaQuery("(min-width: 768px)");
    const navbarBackground = props.isTopOfPage ? "": "bg-red";

    return (
        <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
            <div className={'flex items-center justify-between mx-auto w-5/6'}>
                <h4 className=" font-playfair text-3xl font-bold">AG</h4>

                {/* DESKTOP NAV */}
                {isAboveSmallScreen ? (
                    <div className=" flex justify-between gap-16 font-opensans font-semibold text-sm">
                        <Link 
                            page= "Home"
                            selectedPage= {props.selectedPage}
                            setSlectedPage= {props.setSlectedPage}
                        />
                        <Link 
                            page= "Skills"
                            selectedPage= {props.selectedPage}
                            setSlectedPage= {props.setSlectedPage}
                        />
                        <Link 
                            page= "Projects"
                            selectedPage= {props.selectedPage}
                            setSlectedPage= {props.setSlectedPage}
                        />
                        <Link 
                            page= "Testimonials"
                            selectedPage= {props.selectedPage}
                            setSlectedPage= {props.setSlectedPage}
                        />
                        <Link 
                            page= "Contact"
                            selectedPage= {props.selectedPage}
                            setSlectedPage= {props.setSlectedPage}
                        />
                    </div>
                ): 
                (<button className="rounded-full p-2 bg-red"
                    onClick={()=> setIsMenuToggled(!isMenuToggled)}
                ><img alt="Menu" src="../assets/menu-icon.svg" /></button>)}

                {/* MOBILE MENU POPUP */}

                {
                    !isAboveSmallScreen && isMenuToggled && (
                        <div className="fixed right-0 bottom-0 h-full bg-blue w-[300px]">
                            {/*CLOSE ICON*/}
                            <div className="flex justify-end p-12">
                                <button onClick={()=> setIsMenuToggled(!isMenuToggled)}>
                                    <img alt="close-icon" src="../assets/close-icon.svg"></img>
                                </button>
                            </div>

                            {/*MENU ITEMS*/}
                            <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
                                <Link 
                                page= "Home"
                                selectedPage= {props.selectedPage}
                                setSlectedPage= {props.setSlectedPage}
                                />
                                <Link 
                                    page= "Skills"
                                    selectedPage= {props.selectedPage}
                                    setSlectedPage= {props.setSlectedPage}
                                />
                                <Link 
                                    page= "Projects"
                                    selectedPage= {props.selectedPage}
                                    setSlectedPage= {props.setSlectedPage}
                                />
                                <Link 
                                    page= "Testimonials"
                                    selectedPage= {props.selectedPage}
                                    setSlectedPage= {props.setSlectedPage}
                                />
                                <Link 
                                    page= "Contact"
                                    selectedPage= {props.selectedPage}
                                    setSlectedPage= {props.setSlectedPage}
                                />
                            </div>
                        </div>
                    )
                }
            </div>
        </nav>
    );
}

export default Navbar;