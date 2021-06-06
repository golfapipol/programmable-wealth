export default function ProfileCard(props) {
    return (
        <div class="bg-white my-12 pb-6 w-full justify-center items-center overflow-hidden md:max-w-sm rounded-lg shadow-sm mx-auto border-black border-2 hover:bg-blue-300">
            <div class="mt-8 relative shadow mx-auto h-24 w-24 border-white rounded-full overflow-hidden border-4">
                <img class="object-cover w-full h-full " src={props.alt} />
            </div>
            <div class="mt-2">
                <h1 class="text-lg text-center font-semibold">
                    {props.name} 
                </h1>
                <p class="text-sm text-gray-600 text-center">
                {props.description}
                </p>
            </div>
        </div>        
    )
}