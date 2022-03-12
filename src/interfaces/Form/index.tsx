import { GestureResponderEvent } from "react-native";

export interface IForm<T> {
  handleSubmitForm(event: T): void;
  initialValues: T;
  disabled?: boolean;
  loading?: boolean;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}
