
package calculadora;
import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
public class CalculadoraTest {

    @Mock
    ServicioMatematico servicioFalso;

    @InjectMocks
    Calculadora miCalculadora;

    @Test
    void testRealizarSuma() {
        when(servicioFalso.sumar(5, 5)).thenReturn(10);
        int resultado = miCalculadora.realizarSuma(5, 5);
        assertEquals(10, resultado);
        verify(servicioFalso).sumar(5, 5);
    }

    @Test
    void testRealizarResta() {
        // Entrenamos al mock para la resta
        when(servicioFalso.restar(10, 4)).thenReturn(6);
        
        int resultado = miCalculadora.realizarResta(10, 4);
        
        assertEquals(6, resultado);
        verify(servicioFalso).restar(10, 4);
    }

    @Test
    void testRealizarMultiplicacion() {
        // Entrenamos al mock para la multiplicación
        when(servicioFalso.multiplicar(3, 3)).thenReturn(9);
        
        int resultado = miCalculadora.realizarMultiplicacion(3, 3);
        
        assertEquals(9, resultado);
        verify(servicioFalso).multiplicar(3, 3);
    }

    @Test
    void testRealizarDivisionExitosa() {
        // Entrenamos al mock para la división
        when(servicioFalso.dividir(10, 2)).thenReturn(5.0);
        
        double resultado = miCalculadora.realizarDivision(10, 2);
        
        assertEquals(5.0, resultado);
        verify(servicioFalso).dividir(10, 2);
    }

    @Test
    void testDivisionPorCeroLanzaExcepcion() {
        // Aquí NO usamos Mockito, porque la calculadora debería frenar 
        // el error antes de siquiera llamar al servicio ficticio.
        
        // Usamos assertThrows para cumplir con la consigna de tu profesor
        Exception excepcion = assertThrows(IllegalArgumentException.class, () -> {
            miCalculadora.realizarDivision(10, 0);
        });

        assertEquals("Error: División por cero", excepcion.getMessage());
    }
}