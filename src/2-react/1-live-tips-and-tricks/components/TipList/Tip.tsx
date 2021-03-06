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
                    <span>๐ {formatDate(props.tip.created)}</span>
                    <span>๐จ๐ผโ๐ ะะฒัะพั: {props.tip.author}</span>
                </div>
            </time>

            <h2>{props.tip.title}</h2>
            <p>{props.tip.preview}</p>
        </main>

        <footer>
            <p>๐ &nbsp;ะงะธัะฐัั ะฟะพะปะฝะพัััั &rarr;</p>
        </footer>
    </article>;
}