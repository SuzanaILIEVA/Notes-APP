import { Button, Col, Form, Row, Stack } from "react-bootstrap";
import { Note, Tag } from "../types";
import { Link } from "react-router-dom";
import ReactSelect from "react-select";
import Card from "../Components/Card";
import { useState } from "react";

type Props = {
  notes: Note[];
  availableTags: Tag[];
};

const Main = ({ notes, availableTags }: Props) => {
  const [title, setTitle] = useState<string>("")
  const [ selectedTags, setSelectedTags] = useState<Tag[]>([])
  // console.log(title);
  // console.log(selectedTags);

   /*FILTRELEME
    1) Not başlığı 1. inputta aratılan metni içermelidir. Note'un başlığının küçük harfe
     çevrilmiş hali aralatılan metnin küçük harfe çevrilmiş halini içeriyorsa koşul sağlanır

     &&

    2) 2.input ile seçilen etiketler note'un içerisinde etiketler ile birebir eşleşmeli.
     Seçilen etiketler dizisindeki her bir etiket için note'a ait etikletler arasında eşleşme kontrolü yapıcaz.
     every-some :secili olan herbir etiketin icinden(every),en az biri notun icindeki etiketlerden en az biri(some) ile esit olmali 
  */

     const filtredNotes = notes.filter((note) =>
     note.title.toLowerCase().includes(title.toLowerCase())
     &&
     selectedTags.every((s_tag)=>
     note.tags.some((note_tag)=> note_tag.value === s_tag.value) 
     ))
      
 
  return (
    <div className="container mx-auto py-5">
      {/* ust kisim */}
      <Stack direction="horizontal" className="justify-content-between">
        <div className="d-flex gap-3 align-items-center">
          <img src="/note_logo.png" alt="" width={45} />
          <h1>Notlar</h1>
        </div>

        <Link to="/new">
          <Button>Oluştur</Button>
        </Link>
      </Stack>

      {/* Form alani */}
      <Form className="mt-5">
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Başlığa Göre Ara</Form.Label>
              <Form.Control onChange={(e) => setTitle(e.target.value)} />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Etikete Göre Ara</Form.Label>
              <ReactSelect 
              onChange={(all_tags) => setSelectedTags(all_tags as Tag[])}
                className="text-black"
                isMulti
                options={availableTags}
              />
            </Form.Group>
          </Col>
        </Row>
      </Form>

      {/* Not Listesi  */}
      <Row xs={1} sm={2} lg={3} xl={4} className="mt-4 g-4">
        {filtredNotes.map((note) => (
         <div  key={note.id} >
           <Col>
            <Card note={note} />
          </Col>
         </div>
        ))}
      </Row>
    </div>
  );
};

export default Main;
