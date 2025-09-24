import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function TransferModal() {
    return(
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-100">
      {/* Modal box */}
      <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md text-center">
        <div className="flex w-full justify-center items-center py-2">
            <Image
                src='/images/logo.png'
                alt="All Dogs Training Co Logo"
                height={300}
                width={300}
            />
        </div>
        <h2 className="text-xl font-bold mb-4">Welcome to All Dogs Training Co.</h2>
        <p className="mb-4 whitespace-normal pb-12">This is our old site. We now have new sites for our Austin, Houston and our upcoming Georgia locations</p>

        <p className="mb-4 whitespace-normal">Please click on a button below to go to the site for our location closest to you!</p>

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