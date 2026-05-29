import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;

public class BibliotecaTest {
    @Test
    void testGestionBiblioteca() {
        Biblioteca biblio = new Biblioteca();
        Libro libro = new Libro("Don Quijote");
        
        biblio.agregarLibro(libro);
        
        // Assert 1: assertEquals
        assertEquals(1, biblio.contarLibros());
        // Assert 2: assertNotNull
        assertNotNull(biblio.buscarLibro("Don Quijote"));
        // Assert 3: assertTrue
        assertTrue(libro.estaDisponible());
    }
}