import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;

public class LibroTest {
    @Test
    void testExcepciones() {
        Libro libro = new Libro("1984");
        libro.prestar();
        
        // Prueba de excepción: intenta prestarlo dos veces
        assertThrows(IllegalStateException.class, () -> libro.prestar());
    }
}