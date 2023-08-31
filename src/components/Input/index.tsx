import { useState } from "react";
import { Container, InputContainer, Label } from "./styles";

interface InputProps {
  label: string;
}

export function Input({ label }: InputProps) {
  const [isTextInputFocused, setIsTextInputFocused] = useState(false);

  return (
    <Container>
      <Label>{label}</Label>
      <InputContainer
        isFocused={isTextInputFocused}
        onFocus={() => setIsTextInputFocused(true)}
        onBlur={() => setIsTextInputFocused(false)}
      />
    </Container>
  );
}
