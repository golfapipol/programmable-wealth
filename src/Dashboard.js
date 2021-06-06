import ProfileCard from './components/ProfileCard'

export default function Dashboard() {
    return (
    <div>
        <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">
            Dashboard
            </h1>
        </div>
        </header>
        <main>
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div class="text-center mt-8">
                    <p class="lg:text-5xl text-3xl font-bold tracking-tight lg:mb-4 mb-2">คุณเป็นใคร</p>
                    <p class="text-xl font-medium">เราอยากรู้จักคุณให้มากขึ้น</p>
                </div>
                <div class="grid grid-cols-2">
                    <ProfileCard alt="/img/man.png" name="คุณผู้ชาย" description="Be like man" />
                    <ProfileCard alt="/img/woman.png" name="คุณผู้หญิง" description="Be like woman" />
                </div>
            </div>
        </main>
    </div>
    )
}