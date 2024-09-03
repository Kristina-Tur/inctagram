// @flow
import * as React from 'react';
import Image from "next/image";
import {CharactersType} from "@/assets/hooks/useCharacters";
import styles from './CharacterCard.module.scss'

type Props = {
    character: CharactersType
};
export const CharacterCard = ({character}: Props) => {
    return (
        <div className={styles.card} key={character.id}>
            <div>{character.name}</div>
            <Image src={character.image}
                   alt={`Picture of ${character.name}`}
                   width={300}
                   height={300}
            />
        </div>
    );
};