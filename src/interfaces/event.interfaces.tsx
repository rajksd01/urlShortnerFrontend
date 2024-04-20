import { ChangeEvent } from "react";

export type userInputEvent= {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
