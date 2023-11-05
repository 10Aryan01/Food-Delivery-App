import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Food-delivery',

  projectId: '1yx379fu',
  dataset: 'fooddeleivery',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
