import { Link, useOutletContext } from "react-router-dom"
import { Note } from "../types";
import { Badge, Button, Col, Row, Stack } from "react-bootstrap";
import Markdown from "react-markdown";


type Props ={
  deleteNotes:(id:string) => void;
}

const Detail = ({deleteNotes}:Props) => {
  const note:Note = useOutletContext() // layout'tan gonderdigimiz veriyi aldik
  // console.log(note);
  
  return (
    <div className="container py-5 mx-auto">
    <Row>
      <Col>
      <h1>{note.title}</h1>

      <Stack direction="horizontal" gap={2} className="flex-wrap">
        {note.tags.map((tag) => <Badge>{tag.label}</Badge>)}
      </Stack>
      </Col>

      <Col>
      <Stack direction="horizontal" gap={2} className="justify-content-end">
        <Link to="/">
        <Button variant="secondary">Geri</Button>
        </Link>
        {/* var olan url'in sonuna bir yol eklemek icin yonlendirecegimiz yerin basina slash koymadan yazariz */}
       <Link to="edit"> 
       <Button>Düzenle</Button>
       </Link>

        <Button 
        onClick={() => deleteNotes(note.id)}
        variant="danger">Sil</Button>

      </Stack>
      </Col>

    </Row>

    <Markdown className="mt-5">{note.markdown}</Markdown>
     
    </div>
  )
}

export default Detail
