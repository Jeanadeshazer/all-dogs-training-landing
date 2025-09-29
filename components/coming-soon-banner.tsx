import { InfoIcon } from "lucide-react"

export default function ComingSoonBanner(){
    return (
        <section className="w-full h-auto py-2">
            <div className="flex px-3 space-x-4 bg-accent text-accent-foreground items-center py-2">
                <InfoIcon className="w-8 h-8 px-2" />
                Atlanta Site coming soon!
            </div>
        </section>
    )
}