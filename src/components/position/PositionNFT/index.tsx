import { useAlgebraPositionManagerTokenUri } from "@/generated";
import { useEffect, useRef } from "react";

interface PositionNFTProps {
    positionId: number;
}

const PositionNFT = ({ positionId }: PositionNFTProps) => {

    const { data: uri } = useAlgebraPositionManagerTokenUri({
        args: positionId ? [BigInt(positionId)] : undefined
    })

    const imgRef = useRef<any>()

    const json = uri && JSON.parse(atob(uri.slice('data:application/json;base64,'.length)))

    useEffect(() => {

        if (!imgRef?.current || !json) return

        imgRef.current.src = json.image

    }, [imgRef, json])

    return <div className="inline-block relative w-[160px] h-[160px] overflow-hidden rounded-full">
        {json ? <img ref={imgRef} style={{ transform: 'scale(2)' }} className="mt-4 absolute" /> : <div className="w-full h-full bg-white/10"></div> }
    </div>
}

export default PositionNFT;