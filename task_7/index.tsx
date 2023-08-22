import { useState } from 'react';

export default function Button(props: { children: string }) {
    const [disabled, setDisabled] = useState<boolean>();

    return (
        <button className='' onClick={() => setDisabled(true)} disabled={disabled}>
            {props.children}
        </button>
    );
}
