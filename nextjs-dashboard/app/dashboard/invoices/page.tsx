export default async function Page(){
    return(
        await new Promise((resolve) => setTimeout(resolve, 3000))
    )

}