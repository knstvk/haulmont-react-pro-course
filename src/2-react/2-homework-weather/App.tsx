
import {Filter} from "./components/Filter";
import {Head} from "./components/Head";
import {Current} from "./components/Current";
import {Forecast} from "./components/Forecast";

export const App = () => {
    return (
        <main>
            <Filter/>
            <Head/>
            <Current/>
            <Forecast/>
        </main>
    );
};
