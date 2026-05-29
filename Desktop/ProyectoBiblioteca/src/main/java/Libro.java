

public class Libro {
    private String titulo;
    private boolean disponible;

    public Libro(String titulo) {
        this.titulo = titulo;
        this.disponible = true;
    }

    public String getTitulo() { return titulo; }
    public boolean estaDisponible() { return disponible; }
    public void prestar() { 
        if (!disponible) throw new IllegalStateException("El libro ya está prestado");
        disponible = false; 
    }
}