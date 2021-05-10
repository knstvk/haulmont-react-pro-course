import { formatDate, getTagIcon } from "../../helpers";

export function Tip(props: { tip: any }) {
    const TagIcon = getTagIcon(props.tip.tag.name);

    return <article>
        <header>
            <TagIcon/> <h1>{props.tip.title}</h1>
        </header>

        <main>
            <time>
                <TagIcon/>

                <div>
                    <span>🚀 {formatDate(props.tip.created)}</span>
                    <span>👨🏼‍🚀 Автор: {props.tip.author}</span>
                </div>
            </time>

            <h2>{props.tip.title}</h2>
            <p>{props.tip.preview}</p>
        </main>

        <footer>
            <p>📖 &nbsp;Читать полностью &rarr;</p>
        </footer>
    </article>;
}