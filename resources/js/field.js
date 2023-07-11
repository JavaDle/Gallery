import IndexField from './components/IndexField'
import DetailField from './components/DetailField'
import FormField from './components/FormField'

Nova.booting((app, store) => {
  app.component('index-gallery', IndexField)
  app.component('detail-gallery', DetailField)
  app.component('form-gallery', FormField)
})
