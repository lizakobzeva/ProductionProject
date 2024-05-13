import type { Meta, StoryObj } from "@storybook/react";
import LoginRegister from "./LoginRegister";
import { ThemDecorator } from "shared/config/storybook/StyleDecorator/ThemDecorator";
import { Theme } from "app/providers/ThemProvider/lib/ThemeContext";
import Modal from "shared/ui/Modal";

const meta: Meta<typeof LoginRegister> = {
  component: LoginRegister,
};

export default {
  title: "widgets/LoginRegister",
};
type Story = StoryObj<typeof LoginRegister>;

export const Clear: Story = {
  render: () => (
    <Modal isOpend={true}>
      <LoginRegister />
    </Modal>
  ),
};

export const Primary: Story = {
  render: () => (
    <Modal isOpend={true}>
      <LoginRegister />
    </Modal>
  ),
};
Primary.decorators = [ThemDecorator(Theme.DARK)];
