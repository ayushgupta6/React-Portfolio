import AnchorLink from "react-anchor-link-smooth-scroll";

function DotGroup(props) {

    const selectedStyles ="relative bg-yellow before:absolute before:w-6 before:h-6 before:rounded-full before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]";

    return (
        <div className="flex flex-col gap-6 fixed top-[60%] right-7">
            <AnchorLink
                href="#home"
                className={`${
                props.selectedPage === "home" ? selectedStyles : "bg-dark-grey"
                } w-3 h-3 rounded-full`}
                onClick={() => props.setSelectedPage("home")}
            />
            <AnchorLink
                href="#skills"
                className={`${
                props.selectedPage === "skills" ? selectedStyles : "bg-dark-grey"
                } w-3 h-3 rounded-full`}
                onClick={() => props.setSelectedPage("skills")}
            />
            <AnchorLink
                href="#projects"
                className={`${
                props.selectedPage === "projects" ? selectedStyles : "bg-dark-grey"
                } w-3 h-3 rounded-full`}
                onClick={() => props.setSelectedPage("projects")}
            />
            <AnchorLink
                href="#testimonials"
                className={`${
                props.selectedPage === "testimonial" ? selectedStyles : "bg-dark-grey"
                } w-3 h-3 rounded-full`}
                onClick={() => props.setSelectedPage("testimonial")}
            />
            <AnchorLink
                href="#contact"
                className={`${
                props.selectedPage === "contact" ? selectedStyles : "bg-dark-grey"
                } w-3 h-3 rounded-full`}
                onClick={() => props.setSelectedPage("contact")}
            />
        </div>
    );
}

export default DotGroup;