import { Field } from "../reducers/root";

export default function copy(field : Field) : Field {
    return JSON.parse(JSON.stringify(field));
}