//Marilao, Theresa Mae 
import React from "react";
import { Card, Button, Badge, Row, Col } from "react-bootstrap";

export default function ViewTaskList({ tasks, deleteTask }) {
  const getPriorityVariant = (priority) => {
    switch (priority) {
      case "High":
        return "danger";
      case "Medium":
        return "warning";
      case "Low":
        return "success";
      default:
        return "secondary";
    }
  };

  return (
    <div className="py-3">
      <h5 className="mb-4 fw-bold text-secondary">
        {tasks.length} {tasks.length === 1 ? "Task" : "Tasks"}
      </h5>

      <Row xs={1} sm={2} md={2} lg={2} className="g-4">
        {tasks.length === 0 ? (
          <p className="text-muted">No tasks available.</p>
        ) : (
          tasks.map((task) => (
            <Col key={task.id}>
              <Card
                className="shadow-lg border-0 h-100"
                style={{
                  borderRadius: "12px",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 6px 20px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 10px rgba(0,0,0,0.1)";
                }}
              >
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <Card.Title className="fw-semibold text-dark">
                      {task.title}
                    </Card.Title>
                    {task.priority && (
                      <Badge bg={getPriorityVariant(task.priority)}>
                        {task.priority}
                      </Badge>
                    )}
                  </div>
                  <Card.Text className="text-muted mb-3">
                    {task.description}
                  </Card.Text>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => deleteTask(task.id)}
                  >
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </div>
  );
}
