import { BrowserRouter, Route, Routes } from 'react-router-dom'
import WikiLayout from './wiki/WikiLayout'
import WikiPage from './wiki/WikiPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WikiLayout />}>
          <Route index element={<WikiPage />} />
          <Route path=":slug" element={<WikiPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
