package calculadora;

public class Calculadora {
    
    private ServicioMatematico servicio;

    public Calculadora(ServicioMatematico servicio) {
        this.servicio = servicio;
    }

    public int realizarSuma(int a, int b) {
        return servicio.sumar(a, b);
    }

    public int realizarResta(int a, int b) {
        return servicio.restar(a, b);
    }

    public int realizarMultiplicacion(int a, int b) {
        return servicio.multiplicar(a, b);
    }

    public double realizarDivision(int a, int b) {
        // Regla de negocio: No se puede dividir por cero
        if (b == 0) {
            throw new IllegalArgumentException("Error: División por cero");
        }
        return servicio.dividir(a, b);
    }
}