"use client";
import { useRef } from "react";
import { useScroll, MotionValue } from "framer-motion";
import React from "react";
import FocusIcon from "@/components/icons/FocusIcon";
import RevealText from "@/utils/RevealText";

type BenefitItemProps = {
    title: string;
    description: string;
    className?: string;
    icon?: React.ReactElement;
};

export default function BenefitItem({ title, description, className, icon }: BenefitItemProps) {
    const itemRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: itemRef,
        offset: ["start 85%", "center center"], 
    });

    return (
        <div ref={itemRef} className={className}>
            <div className="benefit-content">
                <div className="icon-wrapper mb-7 text-primary">
                    {icon || <FocusIcon className="text-primary" />}
                </div>
                <h3 className="text-4xl text-left">
                    <RevealText tag="span">{title}</RevealText>
                </h3>
                <p className="mt-7 text-left max-w-[400px] mr-auto">
                    <RevealText tag="span">{description}</RevealText>
                </p>
            </div>
        </div>
    );
}