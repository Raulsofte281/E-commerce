import footer from '@/assets/footer.svg';



export function Footer(){
    return(
        <>
        <div className="w-full font-[Inter]">
            <div className='w-full bg-[url(@/assets/footer.svg)] bg-cover h-[300px] flex flex-col justify-center items-center'>
                <h1 className='text-black text-5xl font-medium'>Join Our Newsletter</h1>
                <p>Sign up for deals, new products and promotions</p>
            </div>

        </div>
        </>
    )
}