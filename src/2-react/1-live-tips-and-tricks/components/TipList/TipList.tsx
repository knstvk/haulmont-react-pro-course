/* Data */
import tips from '../../mock-data/tips.json';

/* Components */
import { Tip } from "./Tip";

import { TipType } from '../../types'

export const TipList: React.FC = () => {
    return (
        <section className='tip-list'>
            {tips?.map((tip: TipType) => {
                return (
                    <Tip key={tip.id} tip={tip}/>
                );
            })}
        </section>
    );
};
