'use client'

import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { Link } from "react-router-dom";

export function SplineSceneBasic() {
    return (
        <div className="w-full h-full bg-transparent relative overflow-hidden flex flex-col md:flex-row">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />

            {/* Left content */}
            <div className="flex-1 p-8 md:p-16 relative z-10 flex flex-col justify-center">
                <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 leading-tight">
                    Engineering Clarity<br />from Chaos
                </h1>
                <p className="mt-6 text-neutral-300 max-w-lg text-lg leading-relaxed">
                    Transmuting raw data into decisive strategic action. We build the architecture for your intelligence, eliminating noise to reveal the signal.
                </p>

                <div className="mt-10">
                    <Link to="/contact">
                        <ShimmerButton className="shadow-2xl">
                            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                                Initiate Audit
                            </span>
                        </ShimmerButton>
                    </Link>
                </div>
            </div>

            {/* Right content */}
            <div className="flex-1 relative h-full w-full">
                <SplineScene
                    scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                    className="w-full h-full"
                />
            </div>
        </div>
    )
}
