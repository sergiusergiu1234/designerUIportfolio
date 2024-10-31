import ContactLinks from "./ContactLinks"

const Footer = () => {
    return <div className="h-56 flex flex-col place-items-end gap-6 justify-end p-8">
        <label className="text-gray-500">@2024 - Stefan Sergiu- Catalin </label>
        <ContactLinks type={"row"} />
    </div>
}

export default Footer