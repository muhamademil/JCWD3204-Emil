import http from "http";
import { Todo } from "./todo";
import { error } from "console";

class TodoServer {
  private todolist = new Todo();
  private server: http.Server;

  constructor() {
    this.server = http.createServer((req, res) =>
      this.requestHandler(req, res)
    );
  }

  requestHandler(req: http.IncomingMessage, res: http.ServerResponse) {
    const { method, url } = req;
    res.setHeader("Content-Type", "application/json");

    //menentukan endpoint dan method untuk 'Get All Todo'
    if (url === "/todos" && method === "GET") {
      res.end(JSON.stringify(this.todolist.getAllTodo()));
    }

    // menentukan endpoint dan method untuk 'Get By Id'
    else if (url?.startsWith("/todos/") && method === "GET") {
      const id = parseInt(url.split("/")[2]);
      res.end(JSON.stringify(this.todolist.getbyIdTodo(id)));
    }

    //menentukan endpoint dan method untuk 'Create Todo'
    else if (url === "/todos" && method === "POST") {
      let body = "";
      req.on("data", (chunk) => (body += chunk));
      req.on("end", () => {
        const { title } = JSON.parse(body);
        res.end(JSON.stringify(this.todolist.addTodo(title)));
      });
    }

    //menentukan endpoint dan method untuk 'Update Todo'
    else if (url?.startsWith("/todos/") && method === "PUT") {
      const id = parseInt(url.split("/")[2]); // -> ["", "todos", ""]
      let body = "";
      req.on("data", (chunk) => (body += chunk));
      req.on("end", () => {
        const { title, completed } = JSON.parse(body);
        res.end(JSON.stringify(this.todolist.updateTodo(id, title, completed)));
      });
    }

    //menentukan endpoint dan method untuk 'Delete Todo'
    else if (url?.startsWith("/todos/") && method === "DELETE") {
      const id = parseInt(url.split("/")[2]);
      res.end(JSON.stringify(this.todolist.deleteTodo(id)));
    } else {
      //jika user menginput endpoint yang tidak dikenali, makan lemparkan error
      res.statusCode = 404;
      res.end(JSON.stringify({ error: "Resource not found" }));
    }
  }

  //membuat logic untuk menyalakan server
  public start(port: number) {
    this.server.listen(port, () =>
      console.log(`Server running on port : ${port}`)
    );
  }
}

//panggil class TodoServer untuk menyalakan server di port 8000
const app = new TodoServer();
app.start(8000);
