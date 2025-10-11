import React from 'react';
import { Card, Badge, Row, Col, Button } from 'react-bootstrap';

export default function ViewTaskList({ tasks, deleteTask }) {
  const getVariant = (p) => (p === 'High' ? 'danger' : p === 'Medium' ? 'warning' : 'success');

  return (
    <div className="py-3">
      <h4 className="mb-4 fw-bold text-secondary">
        {tasks.length} {tasks.length === 1 ? 'Task' : 'Tasks'}
      </h4>

      {tasks.length === 0 ? (
        <div className="p-4 bg-light rounded-3 shadow-sm">No tasks available.</div>
      ) : (
        <Row xs={1} sm={2} md={2} lg={3} className="g-4">
          {tasks.map((task) => (
            <Col key={task.id}>
              <Card
                className="h-100 shadow-sm border-0"
                style={{ borderRadius: 12, transition: 'transform .16s ease, box-shadow .16s ease' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
                }}
              >
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <Card.Title className="mb-0">{task.title}</Card.Title>
                      {task.priority && <Badge bg={getVariant(task.priority)}>{task.priority}</Badge>}
                    </div>
                    <Card.Text className="text-muted small">{task.description}</Card.Text>
                  </div>

                  <div className="d-flex justify-content-end">
                    <Button variant="outline-danger" size="sm" onClick={() => deleteTask(task.id)}>Delete</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}