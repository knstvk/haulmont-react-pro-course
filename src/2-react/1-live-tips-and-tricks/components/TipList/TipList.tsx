/* Data */
import tips from '../../mock-data/tips.json';

/* Components */
import { Tip } from "./Tip";

export const TipList: React.FC = () => {
    return (
        <section className='tip-list'>
            {tips?.map((tip) => {
                return (
                    <Tip key={tip.id} tip={tip}/>
                );
            })}
        </section>
    );
};
