import { applicationConfig, moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { HeaderComponent } from './header.component';
import { provideRouter, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { routes } from '../app.routes';

const meta: Meta<HeaderComponent> = {
  title: 'Component/Header',
  component: HeaderComponent,
  decorators: [
    applicationConfig({
      providers: [provideRouter(routes)]
    })
  ]
}

export default meta;

type Story = StoryObj<HeaderComponent>;

export const Primary: Story = {
  args: {
  }
}
