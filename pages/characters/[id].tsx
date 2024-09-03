import {CharacterCard} from "@/components/CharacterCard/CharacterCard";
import {HeadMeta} from "@/components/HeadMeta/HeadMeta";
import {getLayout} from "@/components/layout/Layout";
import {useCharacter} from "@/assets/hooks/useCharacter";

function Character() {
    const character = useCharacter()
    return (
        <>
            <HeadMeta title={'Character'}/>
            {character && <CharacterCard character={character}/>}
        </>
    );
}

Character.getLayout = getLayout
export default Character