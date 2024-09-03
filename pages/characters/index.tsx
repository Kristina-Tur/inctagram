import {Inter} from "next/font/google";
import {useCharacters} from "@/assets/hooks/useCharacters";
import {CharacterCard} from "@/components/CharacterCard/CharacterCard";
import {HeadMeta} from "@/components/HeadMeta/HeadMeta";
import {getLayout} from "@/components/layout/Layout";
import Link from "next/link";

const inter = Inter({subsets: ["latin"]});

function Characters() {
    const characters = useCharacters()
    return (
        <>
           <HeadMeta title={'Characters'}/>
                {characters && characters.map(character => (
                    <Link key={character.id} href={`/characters/${character.id}`}>
                        <CharacterCard /*key={character.id}*/  character={character}/>
                    </Link>
                        ))}
        </>
    );
}

Characters.getLayout = getLayout
export default Characters