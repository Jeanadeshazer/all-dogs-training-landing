import {
    Card,
    CardTitle,
    CardContent,
} from '@/components/ui/card'
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from '@/components/ui/tabs'
import Image from 'next/image'

export default function TrainerTabsSection(){
    const trainers = [
        {
            name: "Zeke Ule",
            bio: "He's a cool guy.",
            image: "/placeholder-logo.png"
        },
        {
            name: "Sasha Jay",
            bio: "She's a cool woman.",
            image: "/placeholder-logo.png"
        },
        {
            name: "Frankie Sausepan",
            bio: "Best non-stick saucepan in the business",
            image: "/placeholder-logo.png"
        }
    ]
    return (
        <section>
            <div className="flex w-full h-[40vh] justify-center">
                <Tabs defaultValue={trainers[0].name}>
                    <TabsList>
                        {trainers.map((trainer, index) => (
                            <TabsTrigger value={trainer.name} key={index}>{trainer.name}</TabsTrigger>
                        ))}
                    </TabsList>
                        {trainers.map((trainer, index) => (
                            <TabsContent value={trainer.name}>
                                <Card className="w-6/10" key={index}>
                                    <CardTitle>
                                        {trainer.name}
                                    </CardTitle>
                                    <CardContent>
                                        <div className="w-full grid grid-cols-1 md: grid-cols-2 justify-center">
                                            <Image
                                                src={trainer.image}
                                                alt={trainer.name}
                                                height={300}
                                                width={100}
                                            />
                                            <div className="grid grid-cols-1">
                                                {trainer.bio}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        ))}
                </Tabs>
            </div>
        </section>
    )
}