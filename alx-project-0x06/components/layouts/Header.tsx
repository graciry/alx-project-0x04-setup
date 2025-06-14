import Link from "next/link";
import Button from "../common/Button";
import { usePathname } from "next/navigation";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

const Header: React.FC = () => {
    const pathname = usePathname();
    const count = useSelector((state: RootState) => state.counter.value);

    return (
        <header className="fixed w-full bg-white shadow-md">
            <div className="container mx-auto flex justify-between items-center py-6 px-4 md:px-8">
                <Link href="/" className="text-3xl md:text-5xl font-bold text-gray-800 tracking-tight">
                    Splash App
                </Link>
                <div className="flex gap-4">
                    {
                        pathname !== "/counter-app" ? (
                            <>
                                <Button
                                    buttonLabel="Sign In"
                                    buttonSize="medium"
                                    buttonBackgroundColor="red"
                                    action={() => { }}
                                />
                                <Button
                                    buttonLabel="Sign Up"
                                    buttonSize="medium"
                                    buttonBackgroundColor="blue"
                                    action={() => { }}
                                />
                            </>
                        ) : (
                            <p className="font-semibold text-lg">Current count : {count}</p>
                        )
                    }
                </div>
            </div>
        </header>
    );
};

export default Header;
