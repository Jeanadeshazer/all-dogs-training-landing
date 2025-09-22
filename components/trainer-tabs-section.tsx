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

export default function trainersTabsSection(){
    const trainers = [
        {
            name: "Heather Mozingo",
            role: "Owner and Training Director",
            bio: "Heather's background includes training top level show horses, managing high volume dog kennels, and 10+ years in the dog training field. Along with the pet dog training business, Heather is a national level competitor in the sport of IGP (Schutzhund) with her Cane Corso and German Shepherd. There are less than 100 Corsos in the world who have achieved an IGP title, and Heather's Corso, Vinny, has achieved a BH, FH, IGP I, IGP II, IGP lll and placed first at the 2023 and 2024 Cane Corso IGP National Championship...and is Heather's soulmate. Her love of dogs is not just a job, or a hobby, but a way of life.",
            image: "/Heather.jpg"
        },
        {
            name: "Matt Bourgoin",
            role: "Head Trainer",
            bio: "The true dog whisperer. Matt has 20+ years experience training dogs in many areas, is a graduate of NePoPo Gold School, NePoPo Gold Premium, and has graduated from a 6 month Master Trainer course at Tarheel Canine. He has extensive knowledge of canine behavior, rehabilitation work, psychology, and specializes in training dogs through shaping, self discovery and relationship. Matt takes great pride in training dogs, along with owners, and applying all his experience and knowledge to create lifelong results. Matt's personal dogs include a Malinois and a German Shepherd which he competes with in various protection sports.",
            image: "/Matt.jpg"
        },
        {
            name: "Kayla Tong",
            role: "Trainer-Austin Location",
            bio: "Kaylah has over 8 years experience helping owners with their dogs, as well as being a graduate of Starmark Academy. She is a dedicated and knowledgeable dog trainer who brings a versatile, results driven approach to every program. Kaylah has a deep understanding of canine behavior, along with a wide range of proven techniques and problem solving strategies. Kaylah has a background in positive reinforcement, as well as balanced training, and her methods focus on clear communication, consistency, and structure.",
            image: "/placeholder-logo.png"
        }
    ]
    return (
         <section className="w-full py-10">
      {/* Wrapper to center tabs */}
      <div className="flex flex-col items-center">
        <Tabs defaultValue={trainers[0].name} className="w-full max-w-4xl">
          {/* Tab Buttons */}
          <TabsList className="flex justify-center w-full mb-6">
            {trainers.map((member, index) => (
              <TabsTrigger key={index} value={member.name}>
                {member.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Tab Content */}
          {trainers.map((member, index) => (
            <TabsContent key={index} value={member.name}>
              <Card className="p-4">
                <CardContent className="flex flex-col md:flex-row gap-6 h-auto lg:h-[45vh]">
                  {/* Left: Image */}
                  <div className="w-full md:w-1/3">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-auto rounded-lg object-cover"
                    />
                  </div>

                  {/* Right: Name + Bio */}
                  <div className="flex flex-col justify-start w-full md:w-2/3 gap-4">
                    <h2 className="text-2xl font-bold self-center">{member.name}</h2>
                    <h3 className="tetxt-xl font-semibold text-gray/600 self-center">{member.role}</h3>
                    <p className="text-muted-foreground text-sm lg:text-md xl:text-md ">{member.bio}</p>
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