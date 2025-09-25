import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent } from '@/components/ui/dialog'

export default function TransferModal() {
    return(
        <Dialog open={true}>
                <DialogContent className="w-full md:w-3/4 flex flex-col justify-start items-center max-h-[85vh] overflow-y-auto p-6">
                    <div className="flex justify-center mb-4">
                        <Image
                            src='/images/logo.png'
                            alt="All Dogs Training Co Logo"
                            height={120}
                            width={120}
                        />
                    </div>
                    <h2 className="text-4xl font-bold text-accent text-center">The Good Dog Garage</h2>
                    <p className="whitespace-normal text-2xl text-center">Your one stop shop for all things<br/><span className="text-accent text-2xl font-bold"> DOG</span>!!!</p>  
                    <p className="whitespace-normal text-md text-center">
                        Home of ALL Dogs Training Co. in Houston, Austin and coming soon... <span className="text-accent font-bold">Villa Rica, GA! </span>
                        Serving families in the Atlanta Area and Peachtree City, Fayetteville and all surrounding areas!
                    </p>
                    <p className="whitespace-pre-line text-md text-center">
                        We offer our own Custom Training Programs:
                    </p>
                    <div className="flex flex-col items-center space-y-2">
                        <p className="text-sm">
                            - Board and Trains -
                        </p>
                        <p className="text-sm">
                            ...etc
                        </p>
                    </div>
                    <p className="whitespace-pre-line text-md text-center">
                        And <span className="text-accent font-bold">COMING SOON</span> To all locations...
                    </p>
                    <p className="text-center pb-2"> THE <span className="text-accent font-bold">CLEAN SLATE PROGRAM</span> developed by world renowned dog trainers Fabian Robinson and Gina Bishop.</p>
                    <p className="text-center"> We also offer</p>
                    <div className="flex flex-col items-center w-full">
                        <p className='text-sm'>
                            - Virtual Training Solutions for Owners -
                        </p>
                        <p className='text-sm'>
                            - Virtual And Hands-on Courses and Certification Program -
                        </p>
                        <p className='text-sm'>
                            - Consulting For Aspiring Trainers -
                        </p>
                    </div>
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
                </DialogContent>
            </Dialog>
    )
}