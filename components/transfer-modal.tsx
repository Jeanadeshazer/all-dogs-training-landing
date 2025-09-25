import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function TransferModal() {
    return(
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-100">
      {/* Modal box */}
      <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md">
        <div className="flex w-full justify-center items-center py-2">
            <Image
                src='/images/logo.png'
                alt="All Dogs Training Co Logo"
                height={150}
                width={150}
            />
        </div>
        <h2 className="text-xl font-bold mb-4 self-start pl-8 text-accent">The Good Dog Garage</h2>
        <p className="mb-4 whitespace-normal pb-2 text-center">Your one stop shop for 
            <span className="text-accent font-bold"> ALL THINGS DOG</span>!!!
        </p>

        <p className="mb-4 whitespace-normal pb-2">Home of ALL Dogs Training Co. in Houston, Austin and coming soon... <span className="text-accent font-bold">Villa Rica, GA!</span></p>
        <p className="mb-4 whitespace-normal pb-2">Serving families in the Atlanta Area and Peachtree City, Fayetteville and all surrounding areas!</p>
        <p className="mb-4 whitespace-pre-line pd-2">
            Custom Training Programs:
            <br />
            {'\t'} • Board and Train Programs 
            <br />
            {'\t'} • Behavior Solutions 
            <br />
            {'\t'} • Day School 
            <br />
            {'\t'} • Boarding 
            <br />
            And <span className="text-accent font-bold">COMING SOON</span> To all locations...
            <br />
            <p className="ml-5 text-center">{'\t\t'} THE <span className="text-accent font-bold">CLEAN SLATE PROGRAM</span> by Fabian Robinson and Gina Bishop.</p>
        </p>

        <p className="mb-4 whitespace-normal pb-2">Here are the links to our Houston and Austin locations. Georgia site to come soon!</p>

        <div className="flex justify-center gap-2">
            <Link href="https://www.alldogstraininghouston.com/">
                <Button className="bg-accent text-white px-2">
                    Houston
                </Button>
            </Link>
            <Link href="https://www.alldogstrainingaustin.com/">
                <Button className="bg-accent text-white px-2">
                    Austin
                </Button>
            </Link>
        </div>
      </div>
    </div>
    )
}