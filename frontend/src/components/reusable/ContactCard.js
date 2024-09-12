import { cardBody } from "./tailwindClassComponents/card"

function ContactCard({ title, content}) {
    return (
        <div>
        <div className="lg:h-[348px] lg:w-[676px] mx-auto mb-[64px]">
            <div className={`${cardBody} h-[300px] `}>
            <div className="px-20 py-12">
                    <h1><b>{title}</b></h1>
                    <div className="py-5">
                      {content}
                    </div>
            </div>
            </div>
            </div>
            </div>
    )
}

export default ContactCard