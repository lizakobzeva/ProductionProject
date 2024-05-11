import type { Meta, StoryObj } from "@storybook/react";
import LoginRegister from "./LoginRegister";
import { ThemDecorator } from "shared/config/storybook/StyleDecorator/ThemDecorator";
import { Theme } from "app/providers/ThemProvider/lib/ThemeContext";

const meta: Meta<typeof LoginRegister> = {
  component: LoginRegister,
};

export default {
  title: "widgets/LoginRegister",
};
type Story = StoryObj<typeof LoginRegister>;

export const Clear: Story = {
  render: () => <LoginRegister />,
};

export const Primary: Story = {
  render: () => <LoginRegister />,
};
Primary.decorators = [ThemDecorator(Theme.DARK)];
