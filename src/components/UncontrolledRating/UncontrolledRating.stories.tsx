import React, {useState} from "react";
import {UncontrolledRating} from "./UncontrolledRating";
import {action} from "@storybook/addon-actions";
import {Rating} from "../Rating/Rating";

export default {
    title: 'UncontrolledRating',
    component: UncontrolledRating
}

const RatingValueType = action("Rating changed inside component")
export const Rating0 = () => <UncontrolledRating defaultValue={0} onChange={RatingValueType}/>
export const Rating1 = () => <UncontrolledRating defaultValue={1} onChange={RatingValueType}/>
export const Rating2 = () => <UncontrolledRating defaultValue={2} onChange={RatingValueType}/>
export const Rating3 = () => <UncontrolledRating defaultValue={3} onChange={RatingValueType}/>
export const Rating4 = () => <UncontrolledRating defaultValue={4} onChange={RatingValueType}/>
export const Rating5 = () => <UncontrolledRating defaultValue={5} onChange={RatingValueType}/>


