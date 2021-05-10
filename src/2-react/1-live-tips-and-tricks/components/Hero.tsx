/* Icons */
import { icons } from '../theme/icons/tag';
import { NodeJS } from '../theme/icons/tag/NodeJS';

export const Hero = () => {
    return (
        <section className='hero'>
            <div className='title'>
                <h1>Типсы и Триксы</h1>
                <h2>Все темы</h2>
            </div>

            <div className='tags'>
                <span>
                    <icons.React /> React
                </span>
                <span>
                    <NodeJS /> Node.js {/* как импортировать это через icons? */}
                </span>
            </div>
        </section>
    )
};