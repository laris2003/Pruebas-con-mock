


import java.util.ArrayList;
import java.util.List;

public class Biblioteca {
    private List<Libro> catalogo = new ArrayList<>();

    public void agregarLibro(Libro libro) { catalogo.add(libro); }
    public int contarLibros() { return catalogo.size(); }
    public Libro buscarLibro(String titulo) {
        return catalogo.stream()
                .filter(l -> l.getTitulo().equals(titulo))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Libro no encontrado"));
    }
}